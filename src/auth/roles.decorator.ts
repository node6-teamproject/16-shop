import { UserRole } from 'src/user/entities/user.entity';

import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);