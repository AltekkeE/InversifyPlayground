import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { TAGS, TYPES } from './constant';
import { AuthenticationController } from './controller/authentication.controller';

export class AppContainer {

    public static getContext(): Container {
        let container = new Container();

        // Controller
        container.bind<interfaces.Controller>(TYPE.Controller).to(AuthenticationController).inSingletonScope().whenTargetNamed(TAGS.AuthenticationController);


        return container;
    }
}
