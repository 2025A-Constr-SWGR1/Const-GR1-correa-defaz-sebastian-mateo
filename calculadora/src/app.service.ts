import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Log');
    console.debug('Debug');
    console.error('Error');
    console.warn('Warn');
    console.info('Info');
    return 'Hello World!';
  }
}
