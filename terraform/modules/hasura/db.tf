# -----------------------------------------------------------------------------
# Create RDS
# -----------------------------------------------------------------------------

resource "aws_db_subnet_group" "hasura" {
  name       = "hasura"
  subnet_ids = aws_subnet.hasura_private.*.id
}

resource "aws_db_instance" "hasura" {
  name                   = var.rds_db_name
  identifier             = "hasura"
  username               = var.rds_username
  password               = var.rds_password
  port                   = "5432"
  engine                 = "postgres"
  engine_version         = "10.5"
  instance_class         = var.rds_instance
  allocated_storage      = "10"
  storage_encrypted      = var.rds_storage_encrypted
  vpc_security_group_ids = [aws_security_group.hasura_rds.id]
  db_subnet_group_name   = aws_db_subnet_group.hasura.name
  parameter_group_name   = "default.postgres10"
  multi_az               = var.multi_az
  storage_type           = "gp2"
  publicly_accessible    = false

  # snapshot_identifier       = "hasura"
  allow_major_version_upgrade = false
  auto_minor_version_upgrade  = false
  apply_immediately           = true
  maintenance_window          = "sun:02:00-sun:04:00"
  skip_final_snapshot         = false
  copy_tags_to_snapshot       = true
  backup_retention_period     = 7
  backup_window               = "04:00-06:00"
  final_snapshot_identifier   = "hasura"

  lifecycle {
    prevent_destroy = true
  }
}


