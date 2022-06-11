export const getCommand = (commandLine) => commandLine.split(' ')[0];

export const getCommandArgs = (commandLine) => commandLine.split(' ').slice(1);
