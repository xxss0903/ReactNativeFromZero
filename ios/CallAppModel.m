//
//  CallAppModel.m
//  RnNavigateDemo
//
//  Created by sysssc on 2019/6/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CallAppModel.h"

@implementation CallAppModel
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(callOtherApp:(NSString *)appUrl)
{
  
  NSURL *url = [NSURL URLWithString:@"xxqg://"];
  if ([[UIApplication sharedApplication] canOpenURL:url]) {
    [[UIApplication sharedApplication] openURL:url];
  }else {
    NSLog(@"%@ cam打开链接无效", appUrl);
  }
}
@end
