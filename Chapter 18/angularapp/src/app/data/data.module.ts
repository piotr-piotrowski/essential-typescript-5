import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataSource, DataSourceImpl } from './dataSource';
import { RemoteDataSource } from './remoteDataSource';

@NgModule({
  // imports: [HttpClientModule],
  providers: [
    DataSource,
    { provide: DataSourceImpl, useClass: RemoteDataSource },
    provideHttpClient(withInterceptorsFromDi())
  ],
})
export class DataModelModule {}
