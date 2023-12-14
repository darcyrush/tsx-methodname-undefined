import { NestFactory } from "@nestjs/core"

class Main { }

export const bootstrap = async (): Promise<void> => {
  const appModule = ({ module: Main })
  const application = await NestFactory.create(appModule)

  await application.startAllMicroservices()
  await application.listen(3000)
}