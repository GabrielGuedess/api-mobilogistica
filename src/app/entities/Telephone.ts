export interface TelephoneProps {
  id?: string;
  number: number;
  area_code: number;
}

export class Telephone {
  private props: TelephoneProps;

  constructor(props: TelephoneProps) {
    this.props = props;
  }

  public set number(number: number) {
    this.props.number = number;
  }

  public get number(): number {
    return this.props.number;
  }

  public set area_code(area_code: number) {
    this.props.area_code = area_code;
  }

  public get area_code(): number {
    return this.props.area_code;
  }
}
