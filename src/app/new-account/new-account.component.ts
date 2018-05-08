import { Component} from '@angular/core';

import {LogginService} from './../services/logging.service';
import {AccountService} from './../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
 // providers: [LogginService]
})
export class NewAccountComponent {

  constructor(private loggingService: LogginService,
              private accountService: AccountService) {
    this.accountService.statusUpdated.subscribe((status: string) => alert('New Status: ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountName);

    /*const service = new LogginSerice(); // WRONG USAGE OF SERVICES!!
    service.logStatusChange(accountStatus);*/
  }
}
