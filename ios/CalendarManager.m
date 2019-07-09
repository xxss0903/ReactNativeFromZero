//
//  CalendarManager.m
//  RnNavigateDemo
//
//  Created by sysssc on 2019/6/16.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  NSURL *url = [NSURL URLWithString:@"xxqg://"];
  if ([[UIApplication sharedApplication] canOpenURL:url]) {
    [[UIApplication sharedApplication] openURL:url];
  }else {
    NSLog(@"%@ cm打开链接无效", name);
  }
}

- (void)showAlertLog:(NSString *)msg{
//    NSLog(@"%@ 有效" ,msg);
//  UIAlertView * alertView=[[UIAlertView alloc] initWithTitle:@"react-native" message:msg delegate:nil cancelButtonTitle:@"关闭" otherButtonTitles:nil, nil];
//  [alertView show];
}

// 检查能否打开
- (void)checkWhetherHasInstalledAppWithUrlSchemes:(NSString *)urlSchemes {

}
@end
