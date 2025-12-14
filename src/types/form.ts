export type formType = {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export type formError = Partial<Record<keyof formType, string>>                                                                                                                                                                                                                                                                                                                                                                                        