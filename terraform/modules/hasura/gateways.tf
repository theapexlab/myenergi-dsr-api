# IGW for the public subnet
data "aws_internet_gateway" "igw" {
  internet_gateway_id = var.internet_gateway_id
}

data "aws_nat_gateway" "nat_gw" {
  id = var.nat_gateway_id
}
