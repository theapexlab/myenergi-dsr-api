# Create var.az_count private subnets for RDS, each in a different AZ
resource "aws_subnet" "hasura_private" {
  count             = var.az_count
  cidr_block        = cidrsubnet(data.aws_vpc.hasura.cidr_block, 8, count.index + 10) # +10 to not interfer with other ips in this vpc
  availability_zone = data.aws_availability_zones.available.names[count.index]
  vpc_id            = data.aws_vpc.hasura.id

  tags = {
    Name = "hasura #${count.index} (private)"
  }
}

# Create var.az_count public subnets for Hasura, each in a different AZ
resource "aws_subnet" "hasura_public" {
  count                   = var.az_count
  cidr_block              = cidrsubnet(data.aws_vpc.hasura.cidr_block, 8, var.az_count + count.index + 10) # +10 to not interfer with other ips in this vpc
  availability_zone       = data.aws_availability_zones.available.names[count.index]
  vpc_id                  = data.aws_vpc.hasura.id
  map_public_ip_on_launch = true

  tags = {
    Name = "hasura #${var.az_count + count.index} (public)"
  }
}
