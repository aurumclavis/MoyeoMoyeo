export interface IEventsListUIProps {
  onClickNew: () => void;
  onClickDate: (data: any) => void;
  datePick: boolean;
  onClickOpenEventTap: () => void;
  openEvents: boolean;
  onClickOurEventTap: () => void;
  ourEvents: boolean;
}
