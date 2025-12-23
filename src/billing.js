import { Actor } from 'apify';

/**
 * Track a single job board search event
 * @param {string} board - Job board name (e.g., 'linkedin', 'indeed')
 * @param {number} resultsCount - Number of results returned
 */
export async function trackJobSearch(board, resultsCount) {
    try {
        await Actor.trackEvent('job-search', {
            board,
            results: resultsCount,
            timestamp: new Date().toISOString(),
        });
        
        Actor.log.info(`💰 Tracked event: job-search on ${board} (${resultsCount} results)`);
        return true;
    } catch (error) {
        Actor.log.error(`❌ Billing tracking error: ${error.message}`);
        return false;
    }
}

/**
 * Track a multi-board search event
 * @param {string[]} boards - Array of board names
 * @param {number} totalResults - Total results across all boards
 */
export async function trackMultiBoardSearch(boards, totalResults) {
    try {
        await Actor.trackEvent('multi-board-search', {
            boards: boards.join(','),
            boardCount: boards.length,
            totalResults,
            timestamp: new Date().toISOString(),
        });
        
        Actor.log.info(`💰 Tracked event: multi-board-search (${boards.length} boards, ${totalResults} results)`);
        return true;
    } catch (error) {
        Actor.log.error(`❌ Billing tracking error: ${error.message}`);
        return false;
    }
}

/**
 * Track a premium analytics event
 * @param {string} analysisType - Type of analysis performed
 * @param {object} metadata - Additional metadata
 */
export async function trackPremiumAnalytics(analysisType, metadata = {}) {
    try {
        await Actor.trackEvent('premium-analytics', {
            type: analysisType,
            ...metadata,
            timestamp: new Date().toISOString(),
        });
        
        Actor.log.info(`💰 Tracked event: premium-analytics (${analysisType})`);
        return true;
    } catch (error) {
        Actor.log.error(`❌ Billing tracking error: ${error.message}`);
        return false;
    }
}

/**
 * Get billing summary for current actor run
 * @returns {Promise<object>} Billing summary
 */
export async function getBillingSummary() {
    try {
        const runId = Actor.getEnv().actorRunId;
        Actor.log.info(`📊 Fetching billing summary for run: ${runId}`);
        
        // This is a placeholder - implement based on your needs
        return {
            runId,
            timestamp: new Date().toISOString(),
            message: 'Billing summary not yet implemented',
        };
    } catch (error) {
        Actor.log.error(`❌ Error fetching billing summary: ${error.message}`);
        return null;
    }
}
