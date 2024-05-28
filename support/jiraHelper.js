const JiraClient = require('jira-client');
const jiraConfig = require('../config/jiraConfig');

const jira = new JiraClient(jiraConfig);

async function updateJiraTicket(issueId, status) {
  try {
    await jira.transitionIssue(issueId, {
      transition: {
        id: status // ID de la transición que quieres aplicar
      }
    });
    console.log(`Issue ${issueId} updated successfully.`);
  } catch (err) {
    console.error(`Failed to update issue ${issueId}:`, err);
  }
}

module.exports = { updateJiraTicket };
