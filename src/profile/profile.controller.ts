import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfileRequestDto, CreateProfileResponseDto } from './dto';
import { ProfileService } from './profile.service';
import { Profile } from './dto/profile';

@Controller('profile')
@ApiTags('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get(':name')
  getProfile(@Param('name') name: string): Profile {
    return this.profileService.getProfile(name);
  }

  @Post()
  createProfile(@Body() profile: CreateProfileRequestDto): CreateProfileResponseDto {
    return this.profileService.create(profile);
  }
}
