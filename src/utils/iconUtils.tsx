import { RiInstagramFill } from "@remixicon/react";

const iconMap: Map<string, JSX.Element> = new Map([
    ['instagram', <RiInstagramFill size={0}/>]
]);

export function getIconByKey(key: string) {
    return iconMap.get(key) || <></>;
}