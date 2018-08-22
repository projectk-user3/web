import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockData implements InMemoryDbService {

    createDb() {
        const loginData = {
            'statusCode': 200,
            'message': 'Login Success',
            'data': 'eyJhbGciOiJIUzI1NiJ9.eyJmaXJzdE5hbWU'
        };
        return { loginData };
    }
}
