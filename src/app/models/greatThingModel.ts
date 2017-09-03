export class GreatThingModel {

  static fromJson({title, subTitle, imageUrl}): GreatThingModel {
    return new GreatThingModel(title, subTitle, imageUrl);
  }

  static fromJsonArray(jsonArray: any): GreatThingModel[] {
    return jsonArray.map(GreatThingModel.fromJson);
  }
  constructor(public title: string,
              public subTitle: string,
              public imageUrl: string) {
  }

}
