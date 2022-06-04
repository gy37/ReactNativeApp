//
//  CalendarManager.m
//  myReactNativeApp
//
//  Created by gaoshenyu on 2022/5/29.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>
#import <React/RCTConvert.h>

@interface CalendarManager()
@property (nonatomic, assign) BOOL hasListeners;
@end

@implementation CalendarManager
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSDate *)date callback:(RCTResponseSenderBlock)callback) {
//  NSDate *date = [RCTConvert NSDate:timeString];
  RCTLogInfo(@"Pretending to create an event %@ at %@, %@", name, location, date);
  callback(@[[NSNull null], @[@1, @2, @3]]);//第一个参数为错误，第二个参数为返回值
}

RCT_REMAP_METHOD(findEvents, findEventsWithReslover:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  NSArray *events = nil;//@[@1, @3, @5];
  if (events) {
    resolve(events);
  } else {
    NSError *error = [[NSError alloc] initWithDomain:NSCocoaErrorDomain code:123 userInfo:@{
      NSLocalizedFailureReasonErrorKey: @"自定义错误"
    }];
    reject(@"no_events", @"There was no event", error);
  }
  [self calendarEventReminderReveived:nil];
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReveived:(NSNotification *)notification {
  NSString *eventName = @"test test test";//notification.userInfo[@"name"];
  if (self.hasListeners) {
    [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
  }
}

- (void)startObserving {
  self.hasListeners = YES;
}
- (void)stopObserving {
  self.hasListeners = NO;
}
@end
