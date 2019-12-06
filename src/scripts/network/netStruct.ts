class Net {
  public netId: number;
  public name: string;
  public color: string;
  public url: string;

  constructor(netId: number, name: string, color: string, url: string) {
    this.netId = netId;
    this.name = name;
    this.color = color;
    this.url = url;
  }
}

export default {
  Net
}