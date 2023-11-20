import { createMainModule } from "../modules/main.module"
import { Transport } from "@nestjs/microservices"
import { NestFactory } from "@nestjs/core"

type Application = {
  stop: () => Promise<void>
}

export const bootstrap = async (): Promise<Application> => {
  const appModule = createMainModule()
  const application = await NestFactory.create(appModule)

  application.connectMicroservice(
    { transport: Transport.KAFKA },
    { inheritAppConfig: true }
  )

  await application.startAllMicroservices()
  await application.listen(3000)

  const stop = async (): Promise<void> => {
    await application.close()
  }

  return { stop }
}