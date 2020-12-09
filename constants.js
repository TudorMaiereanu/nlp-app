const sprintPlanningData = [
  {
    sample: 'sprint planning',
    label: 'sprint.planning',
  },
  {
    sample: 'planning',
    label: 'sprint.planning',
  },
  {
    sample: 'sprint',
    label: 'sprint.planning',
  },
  {
    sample: 'sprint planning was good',
    label: 'sprint.planning',
  },
  {
    sample: 'are we still having sprint planning this afternoon?',
    label: 'sprint.planning',
  },
  {
    sample: 'this sprint is going to be loooong',
    label: 'sprint.planning',
  },
  {
    sample: 'the planning was very boring',
    label: 'sprint.planning',
  },
  {
    sample: 'planning took ages this time',
    label: 'sprint.planning',
  },
  {
    sample: 'planning was unnecessary given that there are still ongoing tasks',
    label: 'sprint.planning',
  },
  {
    sample: 'when is the next planning',
    label: 'sprint.planning',
  },
  {
    sample: 'when do we start the new sprint',
    label: 'sprint.planning',
  },
  {
    sample: 'sprint is almost over!!',
    label: 'sprint.planning',
  },
  {
    sample: 'did we finish the tasks in this sprint',
    label: 'sprint.planning',
  },
  {
    sample: '3 more tasks and this sprint is over',
    label: 'sprint.planning',
  },
  {
    sample: 'what are our goals for next week',
    label: 'sprint.planning',
  },
  {
    sample: 'do we need this implemented by the following sprint?',
    label: 'sprint.planning',
  },
  {
    sample: 'i might have this done by the end of the week',
    label: 'sprint.planning',
  },
  {
    sample: 'how many points should we assign to this task',
    label: 'sprint.planning',
  },
  {
    sample: 'lmk if the meeting for the planning is still happening on tuesday',
    label: 'sprint.planning',
  },
];

const sprintRetrospective = [
  {
    sample: 'how do we feel about the progress',
    label: 'sprint.retro',
  },
  {
    sample: 'we could not do much',
    label: 'sprint.retro',
  },
  {
    sample: 'we had meeting for the whole past week',
    label: 'sprint.retro',
  },
  {
    sample: 'the planning was not the most accurate',
    label: 'sprint.retro',
  },
  {
    sample: 'I think the moral of the team was a bit down',
    label: 'sprint.retro',
  },
  {
    sample: 'half of our team was gone',
    label: 'sprint.retro',
  },
  {
    sample: 'we got a lot of extra work throughout the week',
    label: 'sprint.retro',
  },
  {
    sample: 'we lost focus after a few days',
    label: 'sprint.retro',
  },
  {
    sample: 'our product manager was gone so we kind of messed the planning at the beginning',
    label: 'sprint.retro',
  },
];

const standupData = [
  {
    sample: 'standup',
    label: 'standup',
  },
  {
    sample: 'standup in 5 minutes',
    label: 'standup',
  },
  {
    sample: 'i missed the standup',
    label: 'standup',
  },
  {
    sample: 'daily meeting',
    label: 'standup',
  },
  {
    sample: 'short daily meeting',
    label: 'standup',
  },
  {
    sample: 'i could not do much yesterday',
    label: 'standup',
  },
  {
    sample: 'i was off the other day',
    label: 'standup',
  },
  {
    sample: 'no updates for me',
    label: 'standup',
  },
  {
    sample: 'still working on the same thing',
    label: 'standup',
  },
  {
    sample: 'i think i will do this at the end of the day',
    label: 'standup',
  },
  {
    sample: 'today',
    label: 'standup',
  },
  {
    sample: 'yesterday',
    label: 'standup',
  },
];

const LANGUAGE = 'en';
const labeledData = [...sprintPlanningData, ...sprintRetrospective, ...standupData];

module.exports = {
  labeledData,
  LANGUAGE,
};
