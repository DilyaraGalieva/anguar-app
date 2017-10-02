import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  environments: Array<string> = [];
  environments$ = Observable.of(this.environments);


  getEnvironments(): Promise<Array<string>> {
    return Promise.resolve(this.environments);
  }

  setEnvironment(environment) {
    if (this.environments.includes(environment)) {
      this.environments.splice(this.environments.indexOf(environment), 1);
    } else {
      this.environments.push(environment);
    }
  }
}
