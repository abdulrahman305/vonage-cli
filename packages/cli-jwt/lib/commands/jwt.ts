import { Flags } from '@oclif/core';
import {
  ConfigParams,
  VonageCommand,
  CommandInterface,
  UXFactory,
  FSFactory,
  VonageArgs,
  VonageFlags,
  ConfigInterface,
} from '@vonage/cli-core';
import { GeneratorOptions, tokenGenerate } from '@vonage/jwt';
type JwtOptions =
  | {
      sub?: string
      acl?: string
      exp: number
    }
  | GeneratorOptions

class JWTRunCommand implements CommandInterface<typeof JWTCommand> {
  vonageConfig?: ConfigInterface;

  ux?: UXFactory;

  fs?: FSFactory;

  async run(args: VonageArgs<typeof JWTCommand>, flags: VonageFlags<typeof JWTCommand>): Promise<void> {
    //    const { acl, subject, exp } = this.flags;
    //    const claims = {
    //      exp: exp || Date.now() + 21600,
    //    } as JwtOptions;
    //
    //    this.debug(`subject: ${subject}`);
    //    this.debug(`expires: ${exp}`);
    //    this.debug(`acl: ${acl}`);
    //    if (subject) {
    //      claims.sub = subject;
    //    }
    //
    //    if (acl) {
    //      claims.acl = acl;
    //    }
    //
    //    this.debug('JWT Claims', claims);
    //
    //    const applicationId = this.vonageConfig.getVar(ConfigParams.APPLICATION_ID);
    //    let privateKey = this.vonageConfig.getVar(ConfigParams.PRIVATE_KEY);
    //
    //    if (this.fs.pathExists(privateKey as string)) {
    //      this.debug(`Loading private key: ${privateKey}`);
    //      privateKey = this.fs.loadFile(privateKey as string);
    //    }
    //
    //    this.debug(`Application id: ${applicationId}`);
    //    this.debug(`Private key: ${privateKey}`);
    //
    //    const token = tokenGenerate(
    //      applicationId as string,
    //      privateKey as string,
    //      claims as GeneratorOptions,
    //    );
    //
    //    this.debug(`Generated token: ${token}`);
    //    this.log(token);
  }
}

export default class JWTCommand extends VonageCommand<typeof JWTCommand> {
  static summary = 'Create a JWT token';

  flags: VonageFlags<typeof JWTCommand> = {
    subject: Flags.string({
      summary: 'Subject for the token',
      description:
            'The "subject". The subject, in this case, will be the name of the user created and associated with your Vonage Application.',
      alises: ['sub'],
    }),
    acl: Flags.string({
      summary: 'Access Control list',
      description:
            'Access control list. The Client SDK uses this as a permission system for users. Read more about it in the ACL Overview: https://developer.vonage.com/en/getting-started/concepts/authentication#acls',
    }),
    exp: Flags.integer({
      summary: 'Time to expire the token (defaults to 24 hours)',
      description:
            '"Expiration time" This is the time in the future that the JWT will expire, as a unix timestamp.',
    }),
  };

  get runCommand(): CommandInterface<typeof JWTCommand> {
    return new JWTRunCommand();
  }
}
