import { Profile } from './profile';

/**
  * It works when I define Profile class within the same file or add @ApiProperty() decorators inside Profile class.
  * Otherwise it didn't automatically generates missing swagger properties.

  tslint:disable:max-classes-per-file
  class Profile {
    readonly name: string;
    readonly age: number;
  }
*/

/**
 * Specify @ApiProperty({ type: Profile }) decorator didn't work as well.
 */

export class CreateProfileResponseDto {
  profile: Profile;
}
