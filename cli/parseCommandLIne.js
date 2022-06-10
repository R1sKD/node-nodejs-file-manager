export function getCommand(commandLine) {
  return commandLine.split(' ')[0];
}

export function getCommandArgs(commandLine) {
  return commandLine.split(' ').slice(1);
}
