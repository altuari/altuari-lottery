'use strict';

export class Altuari {
  /** Store APPLICATION named, will be used in firestore for verifying */
  public APPLICATION_NAME: string;
  public APPLICATION_TOKEN: string;
  public APPLICATION_LOTTERY_TYPE: string;
  public readonly APPLICATION_AUTHENTICATED: boolean;

  /**
   * @param name APPLICATION Name
   */
  constructor(name: string) {
    this.APPLICATION_NAME = name;
    this.APPLICATION_TOKEN = '';
    this.APPLICATION_LOTTERY_TYPE = '';
    this.APPLICATION_AUTHENTICATED = false;
  }

  public initializeApp(APPLICATION_TOKEN: string) {
    const errors = {
      notAllowed: false,
      unrecognizedApp: false,
    };

    /** Check firestore APPLICATION name */
    /** Check to see if APPLICATION is allowed to access type */

    /** Check to make sure user added app */
    if (!errors.unrecognizedApp && !errors.notAllowed) {
      (this.APPLICATION_AUTHENTICATED as Altuari['APPLICATION_AUTHENTICATED']) = true;
    }
  }

  public isAuthenticated() {
    return this.APPLICATION_AUTHENTICATED;
  }
}
