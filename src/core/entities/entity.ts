/* eslint-disable no-underscore-dangle */
import UniqueEntityID from './unique-entity-id';

class Entity<Props> {
  private _id: UniqueEntityID;

  protected props: Props;

  get id() {
    return this._id;
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props;
    this._id = id ?? new UniqueEntityID();
  }
}

export default Entity;
