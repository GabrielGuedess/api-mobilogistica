import { Telephone } from 'app/entities/Telephone';

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  telephones: Telephone[];
  createdAt?: Date;
  modifiedAt?: Date;
}

export class User {
  private _id: string;
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      modifiedAt: new Date(),
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get password(): string {
    return this.props.password;
  }

  public set telephones(telephones: Telephone[]) {
    this.props.telephones = telephones;
  }

  public get telephones(): Telephone[] {
    return this.props.telephones;
  }

  public set modifiedAt(modifiedAt: Date) {
    this.props.modifiedAt = modifiedAt;
  }

  public get modifiedAt(): Date {
    return this.props.modifiedAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get id(): string {
    return this.props.id;
  }
}
