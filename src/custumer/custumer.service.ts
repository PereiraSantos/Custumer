import { Injectable } from '@nestjs/common';
import { Custumer } from './custumer.entity';

@Injectable()
export class CustumerService {

    custumers: Array<Custumer> = [];

    constructor(){
        let custumer = new Custumer();
        custumer.id = 1;
        custumer.nome = 'marciano';
        custumer.sobrenome = 'dos santos pereira';
        custumer.phone ='21345789';
        custumer.cpf = '9874632123';
        custumer.estado = 'pr';
        custumer.cidade ='toledo';
        custumer.bairro = 'cedro';
        custumer.rua = 'dom jao';
        custumer.cep ='123456';
    }

    findAll() {
        
        return this.custumers;
    }

    save(custumer: Custumer) {
        this.custumers.push(custumer);
    }
}
