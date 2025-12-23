# LinkedIn Jobs MCP Server - AI Job Search

> **Connect AI agents to LinkedIn jobs with intelligent search capabilities!**

This Model Context Protocol (MCP) server enables AI assistants like Claude, ChatGPT, and custom AI applications to search for jobs on LinkedIn through natural language. Perfect for AI-powered job search, recruitment automation, and career development tools.

## What It Does

This MCP server provides intelligent LinkedIn job search capabilities, allowing AI agents to:

- 🔍 **Search LinkedIn jobs** with advanced filtering options
- 📊 **Get job market insights** and analytics from LinkedIn
- 🎯 **Find relevant positions** based on skills and preferences
- 💼 **Access real-time job postings** from LinkedIn's professional network
- 🤖 **Enable AI-powered job search** for any MCP-compatible application

### Supported Job Boards

- **LinkedIn** - Professional networking jobs with comprehensive search filters

## Quick Start

### For Claude Desktop

1. **Get your Apify API token** from [Apify Console](https://console.apify.com/account#/integrations)

2. **Configure Claude Desktop:**

   **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`  
   **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

   ```json
   {
     "mcpServers": {
       "linkedin-jobs": {
         "url": "https://shahidirfan--linkedin-jobs-mcp-server.apify.actor/mcp"
       }
     }
   }
   ```

3. **Restart Claude Desktop**

4. **Try it out:**
   ```
   Find me software engineering jobs in Seattle paying over $150k
   ```

### For VS Code (with GitHub Copilot)

1. Open Command Palette: `Cmd/Ctrl + Shift + P`
2. Run: `MCP: Open User Configuration`
3. Add:
   ```json
   {
     "mcpServers": {
       "jobs": {
         "url": "https://shahidirfan--linkedin-jobs-mcp-server.apify.actor/mcp"
       }
     }
   }
   ```

### For Custom Applications

Use any MCP-compatible client and connect to:
```
https://shahidirfan--linkedin-jobs-mcp-server.apify.actor/mcp
```

## Usage Examples

### Basic LinkedIn Job Search
```
"Find remote Python developer jobs on LinkedIn"
```

### Advanced LinkedIn Search with Filters
```
"Search for senior software engineer positions in California on LinkedIn,
maximum 20 results, posted in the last week"
```

### LinkedIn Search with Salary Requirements
```
"Find data scientist jobs on LinkedIn in New York with salaries over $120k"
```

### LinkedIn Job Market Analytics
```
"Analyze the job market for React developers in San Francisco on LinkedIn"
```

## Input

### Configuration Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `actorIds` | array | List of job scraper actor IDs to expose | Pre-configured list |
| `enableBilling` | boolean | Enable pay-per-event billing tracking | `true` |
| `serverPort` | integer | Port for MCP server | `8080` |

### Example Input

```json
{
  "actorIds": [
    "shahidirfan/Fast-LinkedIn-job-Scraper"
  ],
  "enableBilling": true,
  "serverPort": 8080
}
```

## Output

The MCP server returns structured job data including:

- Job titles and descriptions
- Company information
- Location and salary details
- Application links
- Posting dates
- Company reviews (when available)

## Cost

This actor uses **Pay-Per-Event** pricing:

| Event Type | Description | Price |
|------------|-------------|-------|
| `job-search` | LinkedIn job search | $0.01 |
| `premium-analytics` | LinkedIn job market analytics | $0.10 |

**Free Tier:** 10 searches/month included  
**No subscription required** - pay only for what you use!

## Features

### ✅ Advanced LinkedIn Search
Comprehensive LinkedIn job search with multiple filter options

### ✅ Real-Time LinkedIn Data
Access live job postings from LinkedIn's professional network

### ✅ Smart Filtering
Filter LinkedIn jobs by location, salary, experience level, and more

### ✅ Company Insights
Get company information and LinkedIn company pages

### ✅ Pay-Per-Use Pricing
No subscriptions - pay only for LinkedIn searches you perform

### ✅ AI-Native Design
Built specifically for AI agent integration with LinkedIn

### ✅ High Availability
99.9% uptime with standby mode enabled

### ✅ Enterprise Security
SOC 2 Type II certified infrastructure

## Use Cases

### For Job Seekers
- Get personalized LinkedIn job recommendations
- Track new postings on LinkedIn's professional network
- Receive market insights for salary negotiation
- Find professional networking opportunities

### For Recruiters
- Find candidates faster with AI assistance on LinkedIn
- Monitor LinkedIn job market trends
- Analyze competitor job postings on LinkedIn
- Source talent from LinkedIn's professional network

### For Developers
- Build AI-powered LinkedIn job search applications
- Create custom career assistants for LinkedIn
- Automate LinkedIn job market research
- Develop recruitment automation tools for LinkedIn

### For Enterprises
- Integrate LinkedIn job search into HR systems
- Power internal career portals with LinkedIn data
- Enable AI-driven talent acquisition from LinkedIn
- Monitor industry job trends on LinkedIn's platform

## Performance

- **Response Time:** < 5 seconds for LinkedIn job searches
- **Uptime:** 99.9% (standby mode enabled)
- **Rate Limits:** 30 requests/second per user
- **Concurrent Users:** Unlimited

## Security & Privacy

- ✅ All data transmission encrypted (HTTPS)
- ✅ No personal data stored permanently
- ✅ API tokens never exposed to end users
- ✅ SOC 2 Type II certified infrastructure
- ✅ GDPR compliant data handling

## Support

### Getting Help
- 📚 [Apify MCP Documentation](https://docs.apify.com/platform/integrations/mcp)
- 💬 [Apify Discord Community](https://discord.com/invite/jyEM2PRvMU)
- 🐛 [Report Issues](https://github.com/shahidirfan/linkedin-jobs-mcp-server/issues)

### Documentation Links
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Desktop MCP Setup](https://docs.anthropic.com/claude/docs/desktop-mcp)
- [VS Code MCP Extension](https://marketplace.visualstudio.com/items?itemName=anthropic.claude-vscode)

## Changelog

### Version 1.0.0 (2025-01-01)
- Initial release
- LinkedIn job search capabilities
- Pay-per-event billing
- Claude Desktop integration
- VS Code integration
- Standby mode for 24/7 availability

## License

Apache-2.0 License

## Author

**Shahid Irfan**
- Apify: [@shahidirfan](https://apify.com/shahidirfan)
- GitHub: [@shahidirfan](https://github.com/shahidirfan)

---

**Ready to supercharge your AI with job search capabilities?**  
[Get Started Now →](https://console.apify.com/actors/shahidirfan~linkedin-jobs-mcp-server)
