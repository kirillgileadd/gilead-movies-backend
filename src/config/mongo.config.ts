import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

const options = {}

export const getMongoConfig = async (
	configService: ConfigService
): Promise<TypegooseModuleOptions> => ({
	uri: configService.get('MONGO_URI' || 'mongodb+srv://root:root@clustercovid-ooazl.mongodb.net/?retryWrites=true&w=majority'),
	...options,
})
