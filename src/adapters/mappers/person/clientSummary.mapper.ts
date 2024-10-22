import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'

export function DbToClientSummary (dbClientSummary: any[]): GetClientSummaryDTO[] {
  const clientSummaries: GetClientSummaryDTO[] = dbClientSummary.map((clientSummary: any) => {
    return new GetClientSummaryDTO(clientSummary.id_person, clientSummary.client, clientSummary.document_number)
  })
  return clientSummaries
}
