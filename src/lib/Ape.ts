export interface Ape {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly family: string;
    readonly class: string;
    readonly background: string;
    readonly hat: string;
    readonly head: string;
    readonly eyes: string;
    readonly ears: string;
    readonly accessory: string;
    readonly facialHair: string;
    readonly body: string;
    readonly weapon: string;
    readonly image: string;
}

export interface ApeMetadataAttribute {
    readonly trait_type: string;
    readonly value: string
}
