import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { Land } from './components/land/Land';
import { Plan } from './components/cityplans/Plan';
import { Order } from './components/order/Order';
import { CompanyInfo } from './components/profile/CompanyInfo';
import { Client } from './components/login/Client';
import { CartComponent } from './cart/cart.component';
import { RtsecurityService } from './rtsecurity.service';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
    })
};

@Injectable()
export class RealestServices {
    hosturl = 'http://localhost:8080/eman/';
    cityplansUrl = this.hosturl.concat('/getprodcat');  // URL to web api
    landUrl = this.hosturl.concat('/getproducts');
    orderUrl = this.hosturl.concat('/getorders');
    landbycatUrl = this.hosturl.concat('/getproductbycat');
    private handleError: HandleError;

    constructor(
        private http: HttpClient, private rtsecurity: RtsecurityService,
        httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('RealestService');
    }

    /** GET Realestate Plans from the server */
    getPlans(): Observable<Plan[]> {
        return this.http.get<Plan[]>(this.cityplansUrl)
            .pipe(
                catchError(this.handleError('getPlans', []))
            );
    }

    /** GET Realestate Plans from the server */
    getBasicInfo(): Observable<CompanyInfo[]> {
        return this.http.get<CompanyInfo[]>(this.hosturl.concat('/getbasicinfo'))
            .pipe(
                catchError(this.handleError('getBasicInformation', []))
            );
    }
    /** GET Realestate Plans from the server */
    getLookup(cat: string): Observable<string[]> {
        return this.http.get<string[]>(this.hosturl.concat('/getlockup/').concat(cat))
            .pipe(
                catchError(this.handleError('Product Category', []))
            );
    }

    getClientStat(clientid: string, clientname: string): Observable<any[]> {
        return this.http.get<any[]>(this.hosturl.concat('/getorders/stat/').concat(clientid)
            .concat('/').concat(clientname))
            .pipe(catchError(this.handleError('getStatistics', []))
            );
    }
    findItem(findwhat: string, filter: any): Observable<Land[]> {
        return this.http.post<Land[]>(this.hosturl.concat('/search/').concat(findwhat), filter)
            .pipe(catchError(this.handleError("Search Engine", []))
            );
    }
    getPlanLands(catid: string): Observable<Land[]> {
        if (catid !== null) {
            return this.http.get<Land[]>(this.landbycatUrl.concat('/').concat(catid))
                .pipe(
                    catchError(this.handleError('getPlans', []))
                );
        }
    }

    /** GET Realestate lands from the server */
    getLands(): Observable<Land[]> {
        return this.http.get<Land[]>(this.landUrl)
            .pipe(
                catchError(this.handleError('getLands', []))
            );
    }

    getOrders(clientid: string): Observable<Order[]> {
        return this.http.get<Order[]>(this.orderUrl.concat(`/${clientid}`))
            .pipe(
                catchError(this.handleError('getOrders', []))
            );
    }
    getOrder(orderid: number): Observable<Order> {
        return this.http.get<Order>(this.hosturl.concat(`/getorders/order/${orderid}`));
       
    }
    getMinistatement(clientid: string): Observable<StateMent[]> {
        return this.http.get<StateMent[]>(this.hosturl.concat('/getministatement').concat(`/${clientid}`))
            .pipe(
                catchError(this.handleError('getOrders', []))
            );
    }
    /** POST: login to the realestate system */
    login(client: Client): Observable<Client> {
        return this.http.post<Client>(this.hosturl.concat('/login'),
            client,
            httpOptions)
            .pipe(
                catchError(this.handleError('login to the system', client))
            );
    }

    placeOrder(order: Order): Observable<any> {
        return this.http.post<any>(this.hosturl.concat('/placeorder'),
            order,
            httpOptions)
            .pipe(
                catchError(this.handleError('place order', order)));
    }
    updateOrder(order: Order): Observable<any> {
        if(order.id<=0)
            throw new Error("order id must be for an existing order");
        return this.http.post<any>(this.hosturl.concat('/placeorder/'+order.id),
            order,
            httpOptions)
            .pipe(
                catchError(this.handleError('place order', order)));
    }
    signup(client: Client): Observable<Client> {
        return this.http.post<Client>(this.hosturl.concat('/register'),
            client,
            httpOptions)
            .pipe(
                catchError(this.handleError('Signup', client)));
    }

    /* GET heroes whose name contains search term */
    find(term: string): Observable<Land[]> {
        term = term.trim();

        // Add safe, URL encoded search parameter if there is a search term
        const options = term ?
            { params: new HttpParams().set('name', term) } : {};

        return this.http.get<Land[]>(this.landUrl, options)
            .pipe(
                catchError(this.handleError<Land[]>('searchHeroes', []))
            );
    }

    //////// Save methods //////////

    /** POST: add a new hero to the database */
    requestLand(land: Land): Observable<Land> {
        return this.http.post<Land>(this.landUrl, land, httpOptions)
            .pipe(
                catchError(this.handleError('Request Land', land))
            );
    }

    /** DELETE: delete the hero from the server */
    deleteOrder(id: number): Observable<unknown> {
        const url = `${this.hosturl}/deleteorder/${id}`; // DELETE deleteorder/42
        return this.http.delete(url, httpOptions)
            .pipe(
                catchError(this.handleError('delete order'))
            );
    }

    /** PUT: update the hero on the server. Returns the updated hero upon success. */
    updateHero(land: Land): Observable<Land> {
        httpOptions.headers =
            httpOptions.headers.set('Authorization', 'my-new-auth-token');

        return this.http.put<Land>(this.landUrl, land, httpOptions)
            .pipe(
                catchError(this.handleError('updateHero', land))
            );
    }

    get currentClient() {
        return RtsecurityService.currentClient.username
    }
}
