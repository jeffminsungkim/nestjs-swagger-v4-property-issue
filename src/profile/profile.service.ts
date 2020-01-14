import { Injectable } from '@nestjs/common';
import { CreateProfileRequestDto, CreateProfileResponseDto } from './dto';
import { Profile } from './dto/profile';

@Injectable()
export class ProfileService {
  private readonly profile: Profile[] = [];

  create(profile: CreateProfileRequestDto): CreateProfileResponseDto {
    this.profile.push(profile);

    return { profile };
  }

  getProfile(name: string): Profile {
    return this.profile.find(profile => profile.name === name);
  }
}
