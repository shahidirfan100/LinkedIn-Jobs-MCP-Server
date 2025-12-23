import { Actor } from 'apify';
import { spawn } from 'child_process';
import http from 'http';

// Your job scraper actors - UPDATE THIS LIST WITH ALL YOUR ACTORS
const DEFAULT_JOB_SCRAPERS = [
    'shahidirfan/Fast-LinkedIn-job-Scraper',
    // Add all your 105+ actors here...
];

await Actor.init();

console.log('🚀 Starting LinkedIn Jobs MCP Server...');

// Get input or use defaults
const input = await Actor.getInput() || {};
const actorIds = input.actorIds || DEFAULT_JOB_SCRAPERS;
const enableBilling = input.enableBilling !== false;
const serverPort = input.serverPort || process.env.ACTOR_WEB_SERVER_PORT || 8080;

console.log(`📋 Exposing ${actorIds.length} job scraper actors via MCP`);
console.log(`💰 Billing: ${enableBilling ? 'ENABLED' : 'DISABLED'}`);

// Get actor environment
const actorEnv = Actor.getEnv();
const mcpUrl = actorEnv.actorWebServerUrl 
    ? `${actorEnv.actorWebServerUrl}/mcp` 
    : `http://localhost:${serverPort}/mcp`;

console.log(`🌐 MCP Server will be available at: ${mcpUrl}`);

// Create health check server
const healthServer = http.createServer((req, res) => {
    if (req.url === '/health' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'ok',
            server: 'linkedin-jobs-mcp-server',
            version: '1.0.0',
            mcpEndpoint: '/mcp',
            actorsCount: actorIds.length,
            billing: enableBilling,
        }));
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

healthServer.listen(serverPort, () => {
    console.log(`✅ Health check server listening on port ${serverPort}`);
});

// Start MCP server process using Apify's official MCP server
console.log('🔧 Starting Apify MCP server process...');

const mcpArgs = [
    '-y',
    '@apify/actors-mcp-server',
    `--actors=${actorIds.join(',')}`,
];

// Add tools configuration
mcpArgs.push('--tools=actors,runs,storage');

console.log(`📦 Running: npx ${mcpArgs.join(' ')}`);

const mcpProcess = spawn('npx', mcpArgs, {
    env: {
        ...process.env,
        APIFY_TOKEN: process.env.APIFY_TOKEN,
        MCP_SERVER_PORT: serverPort,
        NODE_ENV: 'production',
    },
    stdio: ['pipe', 'pipe', 'pipe'],
});

// Handle MCP server output
mcpProcess.stdout.on('data', (data) => {
    const output = data.toString().trim();
    if (output) {
        console.log(`[MCP] ${output}`);
    }
});

mcpProcess.stderr.on('data', (data) => {
    const error = data.toString().trim();
    if (error && !error.includes('ExperimentalWarning')) {
        console.log(`[MCP Error] ${error}`);
    }
});

mcpProcess.on('error', (error) => {
    console.log(`❌ MCP process error: ${error.message}`);
});

mcpProcess.on('exit', (code, signal) => {
    if (code !== 0) {
        console.log(`❌ MCP process exited with code ${code} and signal ${signal}`);
    } else {
        console.log('✅ MCP process exited successfully');
    }
});

// Keep actor running indefinitely (standby mode)
console.log('✅ MCP Server is now running and ready to accept connections');
console.log(`📋 Available actors: ${actorIds.length}`);
console.log(`🔗 MCP Endpoint: ${mcpUrl}`);
console.log(`💡 Add this to your Claude Desktop config:`);
console.log(`{
  "mcpServers": {
    "linkedin-jobs": {
      "url": "${mcpUrl}"
    }
  }
}`);

// Keep the process alive
process.on('SIGTERM', async () => {
    console.log('📛 Received SIGTERM, shutting down gracefully...');
    mcpProcess.kill();
    healthServer.close();
    await Actor.exit();
});

// Don't exit - let standby mode handle it
await new Promise(() => {});
