resource "aws_route_table" "public_rt" {
  vpc_id = data.aws_vpc.hasura.id

  tags = merge(
    var.common_tags,
    tomap({ Name = "hasura-public-dev" })
  )
}

resource "aws_route" "public_rt_route" {
  route_table_id         = aws_route_table.public_rt.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = data.aws_internet_gateway.igw.id
}

resource "aws_route_table_association" "public" {
  count = length(aws_subnet.hasura_public.*.id)

  subnet_id      = element(aws_subnet.hasura_public.*.id, count.index)
  route_table_id = aws_route_table.public_rt.id
}

resource "aws_route_table" "private_rt" {
  vpc_id = data.aws_vpc.hasura.id

  tags = merge(
    var.common_tags,
    tomap({ Name = "hasura-private-dev" })
  )
}

resource "aws_route" "private_rt_route" {
  route_table_id         = aws_route_table.private_rt.id
  destination_cidr_block = "0.0.0.0/0"
  nat_gateway_id         = data.aws_nat_gateway.nat_gw.id
}

resource "aws_route_table_association" "private" {
  count = length(aws_subnet.hasura_private.*.id)

  subnet_id      = element(aws_subnet.hasura_private.*.id, count.index)
  route_table_id = aws_route_table.private_rt.id
}

