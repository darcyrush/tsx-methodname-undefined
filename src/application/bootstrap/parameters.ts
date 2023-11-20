import { createCommand, createOption } from "commander"
import { bootstrap } from "./bootstrap"

export const parameters = async (): Promise<void> => {
  const startCallback = async (): Promise<void> => {
    await bootstrap()
  }

  const command = createCommand()
    .addOption(createOption('--test [test]'))
    .action(startCallback)

  await command.parseAsync()
}