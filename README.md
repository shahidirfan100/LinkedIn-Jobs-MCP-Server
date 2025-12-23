# LinkedIn Jobs MCP Server - AI Job Search

> **Connect AI agents to 50+ job boards including LinkedIn, Indeed, Glassdoor, and more!**

This Model Context Protocol (MCP) server enables AI assistants like Claude, ChatGPT, and custom AI applications to search for jobs across multiple platforms through natural language. Perfect for AI-powered job search, recruitment automation, and career development tools.

## What It Does

This MCP server provides a unified interface to **50+ job scraping tools**, allowing AI agents to:

- 🔍 **Search jobs** across multiple job boards simultaneously
- 📊 **Get job market insights** and analytics
- 🎯 **Find relevant positions** based on skills and preferences
- 💼 **Access real-time job postings** from major platforms
- 🤖 **Enable AI-powered job search** for any MCP-compatible application

### Supported Job Boards

- **LinkedIn** - Professional networking jobs
- **Indeed** - Global job search platform
- **Glassdoor** - Jobs with company reviews and salaries
- **Monster** - Traditional job board
- **CareerBuilder** - Resume and job matching
- **Dice** - Technology and engineering jobs
- **Remote work platforms** - WeWorkRemotely, Remote.OK, Remotive
- **Industry-specific boards** - Healthcare, Tech, Finance, and more
- **50+ additional job sources** worldwide

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

### Basic Job Search
```
"Find remote Python developer jobs"
```

### Advanced Search with Filters
```
"Search for senior software engineer positions in California,
maximum 20 results, posted in the last week"
```

### Multi-Board Search
```
"Find data scientist jobs on LinkedIn, Indeed, and Glassdoor
in New York with salaries over $120k"
```

### Job Market Analytics
```
"Analyze the job market for React developers in San Francisco"
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
    "shahidirfan/Fast-LinkedIn-job-Scraper",
    "shahidirfan/indeed-job-scraper",
    "shahidirfan/glassdoor-job-scraper"
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
| `job-search` | Single job board search | $0.01 |
| `multi-board-search` | Search across multiple boards | $0.05 |
| `premium-analytics` | Job market analytics | $0.10 |

**Free Tier:** 10 searches/month included  
**No subscription required** - pay only for what you use!

## Features

### ✅ Multi-Board Search
Search multiple job boards simultaneously with a single query

### ✅ Real-Time Data
Access live job postings as they're published

### ✅ Smart Filtering
Filter by location, salary, experience level, and more

### ✅ Company Insights
Get company reviews, ratings, and culture information

### ✅ Pay-Per-Use Pricing
No subscriptions - pay only for searches you perform

### ✅ AI-Native Design
Built specifically for AI agent integration

### ✅ High Availability
99.9% uptime with standby mode enabled

### ✅ Enterprise Security
SOC 2 Type II certified infrastructure

## Use Cases

### For Job Seekers
- Get personalized job recommendations
- Track new postings across multiple boards
- Receive market insights for salary negotiation
- Find remote work opportunities

### For Recruiters
- Find candidates faster with AI assistance
- Monitor job market trends
- Analyze competitor job postings
- Source talent from multiple platforms

### For Developers
- Build AI-powered job search applications
- Create custom career assistants
- Automate job market research
- Develop recruitment automation tools

### For Enterprises
- Integrate job search into HR systems
- Power internal career portals
- Enable AI-driven talent acquisition
- Monitor industry job trends

## Performance

- **Response Time:** < 5 seconds for single board searches
- **Multi-Board:** 10-15 seconds for 3+ boards
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
- Support for 50+ job boards
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
