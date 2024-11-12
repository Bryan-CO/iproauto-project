import { District } from '../../../domain/entities/localization/District'
import { Province } from '../../../domain/entities/localization/Province'
import { Employee } from '../../../domain/entities/persons/Employee'
import { DocumentType } from '../../../domain/entities/persons/Person'

export function DbToEmployees (dbEmployees: any[]): Employee[] {
  const employees: Employee[] = dbEmployees.map((employeeDb: any) => {
    return new Employee(
      employeeDb.id_employee,
      new DocumentType(employeeDb.id_document_type, employeeDb.document_type_name),
      employeeDb.document_number,
      new Province(employeeDb.id_province, employeeDb.province_name),
      new District(employeeDb.id_district, employeeDb.id_province, employeeDb.district_name),
      employeeDb.address,
      employeeDb.self_phone,
      employeeDb.reference_phone,
      employeeDb.email,
      employeeDb.observations,
      employeeDb.names,
      employeeDb.last_names,
      employeeDb.employee_since
    )
  })
  return employees
}
