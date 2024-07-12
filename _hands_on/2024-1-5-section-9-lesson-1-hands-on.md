---
layout: posts
title: 'Hands-On: CloudFormation'
section: Section-9
lesson: 1
order: 1
---

### Hands-On: CloudFormation

This practical exercise will guide you through the process of using AWS CloudFormation to provision and manage resources in AWS. You will create an Amazon EC2 instance using a CloudFormation template, which is a core component of infrastructure as code (IaC).

<!-- pagebreak -->

#### Step 1: Prepare the Template

- **Create Template File**: Start by creating a new file locally named `ec2.yaml`.
- **Template Content**:
  ```yaml
  ---
  Resources:
    MyInstance:
      Type: AWS::EC2::Instance
      Properties:
        AvailabilityZone: us-east-1a
        ImageId: ami-a4c7edb2
        InstanceType: t2.micro
  ```
  Make sure the spacing in your YAML file is correct as YAML depends on proper indentation.

<!-- pagebreak -->

#### Step 2: Launch the Stack

- **Access CloudFormation**: Navigate to the CloudFormation service in the AWS Management Console.
- **Create Stack**:
  - Click 'Create Stack'.
  - Choose 'Upload a template file', select your `ec2.yaml` file, and click 'Next'.
  - Enter a stack name and keep all other settings at their default values. Continue clicking 'Next' until you reach the stack overview page.
  - Review your template and configuration, then click 'Create stack'.

<!-- pagebreak -->

#### Step 3: Advanced Configuration

- **Prepare Advanced Template**: Create a file named `ec2-advanced.yaml` with the following content:

  ```yaml
  ---
  Parameters:
    SecurityGroupDescription:
      Description: Security Group Description
      Type: String

  Resources:
    MyInstance:
      Type: AWS::EC2::Instance
      Properties:
        AvailabilityZone: us-east-1a
        ImageId: ami-a4c7edb2
        InstanceType: t2.micro
        SecurityGroups:
          - !Ref SSHSecurityGroup
          - !Ref ServerSecurityGroup

    MyEIP:
      Type: AWS::EC2::EIP
      Properties:
        InstanceId: !Ref MyInstance

    SSHSecurityGroup:
      Type: AWS::EC2::SecurityGroup
      Properties:
        GroupDescription: Enable SSH access via port 22
        SecurityGroupIngress:
          - CidrIp: 0.0.0.0/0
            FromPort: 22
            IpProtocol: tcp
            ToPort: 22

    ServerSecurityGroup:
      Type: AWS::EC2::SecurityGroup
      Properties:
        GroupDescription: !Ref SecurityGroupDescription
        SecurityGroupIngress:
          - IpProtocol: tcp
            FromPort: 80
            ToPort: 80
            CidrIp: 0.0.0.0/0
          - IpProtocol: tcp
            FromPort: 22
            ToPort: 22
            CidrIp: 192.168.1.1/32

  Outputs:
    ElasticIP:
      Description: Elastic IP Value
      Value: !Ref MyEIP
  ```

- **Deploy**: Upload this updated template to your CloudFormation and follow the process to update your stack.

---
