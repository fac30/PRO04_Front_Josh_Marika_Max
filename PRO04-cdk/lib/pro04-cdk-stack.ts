import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3deploy from "aws-cdk-lib/aws-s3-deployment";

export class Pro04CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    const siteBucket = new s3.Bucket(this, "SiteBucket", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
      blockPublicAccess: new s3.BlockPublicAccess({
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      }),
      objectOwnership: s3.ObjectOwnership.OBJECT_WRITER,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // Optional: for easy cleanup during development
      autoDeleteObjects: true, // Optional: for easy cleanup during development
    });

    // Deploy the files from the dist folder
    new s3deploy.BucketDeployment(this, "DeployWebsite", {
      sources: [s3deploy.Source.asset("/Users/marikabertelli/Documents/MyProject/PRO04_Front_Josh_Marika_Max/dist")],
      destinationBucket: siteBucket,
    });

    // Output the bucket website URL
    new cdk.CfnOutput(this, "BucketURL", {
      value: siteBucket.bucketWebsiteUrl,
      description: "The URL of the static website",
    });
  }
}
