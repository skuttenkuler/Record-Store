import Model, { attr } from '@ember-data/model';

export default class RecordModel extends Model {
  @attr('string') title;
  @attr('string') artist;
  @attr('string') genre;
  @attr('string') thumbnail;
  @attr('string') year;
}
