import http from '@/api/http';

export interface ModpackDetails {
    id: number;
    name: string;
    description: string;
    longDescription: string;
    author: string;
    thumbnailUrl: string;
    downloadCount: number;
    gameVersions: string[];
    modLoaders: string[];
    updatedAt: string;
}

export default (uuid: string, modpackId: number): Promise<ModpackDetails> => {
    return http.get(`/api/client/servers/${uuid}/modpacks/${modpackId}`);
};
