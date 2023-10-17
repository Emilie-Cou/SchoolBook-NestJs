import { Controller, Get } from '@nestjs/common';
import { ProfService } from './_prof.service';


// Routage: localhost:3000/prof
@Controller('prof')
export class ProfController {
    
    // Le constructor importe ce dont on a besoin
    constructor(private readonly profService: ProfService) {}


    // Ma méthode getAllProf est décorée: 
        // Ici Get, indique la méthode
    @Get()
    getAllProf(

    ) : Promise<string> {
        try {
            console.log('je suis dans le try du controller');
            
            return this.profService.getAllProf()
        } 
        catch (error) {
            console.log('catch du controller === ' , error);
            
            return error
        }
    }


}