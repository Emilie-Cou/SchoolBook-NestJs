import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfService {

    async getAllProf() : Promise<string> {
        try {
            console.log('Je suis dans le try du service');
            
            return await 'Coucou'
        } catch (error) {
            console.log('erreur dans le service === ' , error)
        }
    }

}
