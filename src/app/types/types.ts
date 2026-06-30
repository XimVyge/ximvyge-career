
export interface IImageData {
    name?: string;
    link?: string;
}

export interface IWorkExperience {
    company?: string;
    timePeriod?: string;
    position?: string;
    responsibilities?: string[];
    techStack?: string[];
}

export interface IEducation {
    institution?: string;
    timePeriod?: string;
    mentions?: string[];
}
