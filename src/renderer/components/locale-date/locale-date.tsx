import React from "react";
import { observer } from "mobx-react";
import moment from "moment-timezone";
import { UserStore } from "../../../common/user-store";

interface Props {
  date: string
}

@observer
export class LocaleDate extends React.Component<Props> {
  render() {
    const { preferences } = UserStore.getInstance();
    const { date } = this.props;

    return <>{moment.tz(date, preferences.localeTimezone).format()}</>;
  }
}
