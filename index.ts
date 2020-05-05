import { Construct } from 'monocdk-experiment';
import { aws_s3 } from 'monocdk-experiment';
import { Topic } from 'monocdk-experiment/aws-sns';

export class MyConstruct extends Construct {
  public readonly myBucket: aws_s3.Bucket;
  public readonly myTopic: Topic;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.myBucket = new aws_s3.Bucket(this, 'MyBucket');
    this.myTopic = new Topic(this, 'MyTopic');
  }
}
