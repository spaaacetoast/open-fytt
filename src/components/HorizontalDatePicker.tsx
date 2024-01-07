import dayjs, { Dayjs } from "dayjs";
import { For, Index, createEffect, createSignal, onMount } from "solid-js";
import { HStack } from "../../styled-system/jsx";
import { HorizontalDatePickerButton } from "./HorizontalDatePickerButton";

const getDaysFromWeek = (date: Dayjs) => {
  const startOfWeek = date.startOf("week");
  return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
};

const extendedWeekDays = (date: Dayjs) => {
  const nextWeek = date.add(1, "week");
  const previousWeek = date.subtract(1, "week");
  return [
    getDaysFromWeek(previousWeek),
    getDaysFromWeek(date),
    getDaysFromWeek(nextWeek),
  ];
};

export const HorizontalDatePicker = () => {
  const weekDays = extendedWeekDays(dayjs());
  const [selectedDayOffset, setSelectedDayOffset] = createSignal(
    weekDays[1].findIndex((day) => day.isSame(dayjs(), "day")) + 7
  );

  return (
    <>
      <HStack
        gap={4}
        overflowX="auto"
        scrollSnapType="x"
        scrollSnapStrictness="mandatory"
        maxWidth="screen"
        scrollbar="hidden"
        ref={(el) => setTimeout(() => el.children[1].scrollIntoView())}
      >
        <For each={weekDays}>
          {(week, weekIndex) => (
            <HStack
              flexShrink={0}
              width="screen"
              justifyContent="center"
              scrollSnapAlign="center"
            >
              <For each={week}>
                {(day, dayIndex) => {
                  const dayOffset = () => dayIndex() + weekIndex() * 7;

                  return (
                    <>
                      <HorizontalDatePickerButton
                        selected={dayOffset() === selectedDayOffset()}
                        onClick={() => setSelectedDayOffset(dayOffset())}
                      >
                        <HorizontalDatePickerButton.Label>
                          {day.format("D")}
                        </HorizontalDatePickerButton.Label>
                        <HorizontalDatePickerButton.SubLabel>
                          {day.format("ddd")}
                        </HorizontalDatePickerButton.SubLabel>
                      </HorizontalDatePickerButton>
                    </>
                  );
                }}
              </For>
            </HStack>
          )}
        </For>
      </HStack>
    </>
  );
};
