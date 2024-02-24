import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import plularize from 'pluralize'

export class NamingStrategy extends SnakeNamingStrategy {
    public override tableName(className: string, customName: string): string {
        return plularize(super.tableName(className, customName))
    }
}
